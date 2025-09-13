"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ISubscriptionFormValues } from "../Footer.types";
import { Button } from "@/components/ui/button";
import { subscribe } from "@/lib/api/subscribe.route";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "use-intl";

export default function SubscriptionForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error" | "duplicate"
	>("idle");
	const { toast } = useToast();
	const t = useTranslations("footer.subscribe");

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("invalidEmailMessage")
			.required("requiredMessage"),
	});

	const handleSubmit = async (
		values: ISubscriptionFormValues,
		{ resetForm }: { resetForm: () => void }
	) => {
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Simulate API call
			await subscribe(values.email);
			setSubmitStatus("success");
			resetForm();
			toast({
				description: t("successMessageToaster"),
				duration: 5000,
			});
		} catch {
			toast({
				description: t("errorMessageToaster"),
				duration: 5000,
				variant: "destructive",
			});
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex justify-end items-center">
			<div className="flex flex-col">
				<Formik
					initialValues={{ email: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<Form
							className={`flex gap-2 w-fit max-w-md bg-white px-4 py-2 items-center relative rounded-lg border ${
								errors.email && touched.email
									? "border-red-400 bg-red-50"
									: "border-gray-300 bg-white"
							} text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
						>
							<div className="flex-1 max-w-64">
								<Field
									type="email"
									name="email"
									placeholder={t("placeholder")}
									className={`w-full outline-none bg-transparent`}
									disabled={isSubmitting}
								/>
							</div>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="px-6 py-3 bg-primary text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
							>
								{isSubmitting ? (
									<div className="flex items-center gap-2">
										<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
										<span>...</span>
									</div>
								) : (
									t("button")
								)}
							</Button>
							<ErrorMessage
								name="email"
								component="div"
								className={`text-red-400 text-sm mt-1 absolute top-full`}
							/>
						</Form>
					)}
				</Formik>

				{submitStatus === "success" && (
					<div className={`mt-3 text-green-400 text-sm`}>
						{t("successMessage")}
					</div>
				)}
				{submitStatus === "error" && (
					<div className={`mt-3 text-red-400 text-sm `}>
						{t("errorMessage")}
					</div>
				)}
				{submitStatus === "duplicate" && (
					<div className={`mt-3 text-red-400 text-sm `}>
						{t("duplicateMessage")}
					</div>
				)}
			</div>
		</div>
	);
}
