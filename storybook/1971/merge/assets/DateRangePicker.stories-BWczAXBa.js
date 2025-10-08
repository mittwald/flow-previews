import{j as r}from"./iframe-7dgBHkjI.js";import{a as h,u as x,F as j,t as D}from"./Form-ChLUzjHn.js";import{L as e}from"./Label-BOtdfEdH.js";import{B as s}from"./Button-C4xC-ENb.js";import{S}from"./Section-BTwbdvzE.js";import{A as R}from"./ActionGroup-DgEWvKip.js";import{s as g}from"./Action-aBxNfjGZ.js";import{J as a,h as y,L as B}from"./DateField-DP8gPni_.js";import{D as o}from"./DateRangePicker-DuP16_KT.js";import{F as P}from"./FieldDescription-HgH3Q7pf.js";import"./index-Cun1SEai.js";import"./dynamic-3ixFNiB4.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./clsx-B-dksMZM.js";import"./index-DzRRQR_A.js";import"./FieldError-XEHbUqlq.js";import"./IconWarning-CHzLfKjq.js";import"./FieldError-DQvJzSCl.js";import"./utils-skLZq2rT.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./context-DLyAckLP.js";import"./browser-BYuTkZ2t.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./Text-CPbpE1eA.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C40tO5Ld.js";import"./useFocus-BVcT7Cmq.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./useStatic-BofYKATW.js";import"./context-CM0pxKNs.js";import"./Form-emkFOLws.js";import"./Group-Bn60iEKX.js";import"./Input-pFk5V5wL.js";import"./useFormValidation-lhUbjjow.js";import"./useFormReset-DcXBOsyZ.js";import"./useSpinButton-CH8zCm5Q.js";import"./useFilter-CKkOF_ze.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-CM6k8qzJ.js";import"./useOverlayController-Zz6_dm2l.js";import"./OverlayContextProvider-hM9hqaVX.js";import"./ClearPropsContextView-Dl-zrP-C.js";import"./RangeCalendar-U7sTneTA.js";import"./Heading-C_3CsfJi.js";import"./useUpdateEffect-BcmNLgZM.js";import"./useMakeFocusable-DAYaUZS_.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Ur=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};
