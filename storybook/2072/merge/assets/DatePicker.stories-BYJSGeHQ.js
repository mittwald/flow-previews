import{j as r}from"./iframe-tskdVQ8N.js";import{a as x,u as h,F as f,t as D}from"./Form-CcGsBZKh.js";import{L as o}from"./Label-CsJ7Xmev.js";import{B as n}from"./Button-Dsg_4rdI.js";import{S}from"./Section-O741B4-H.js";import{A as g}from"./ActionGroup-B0eph536.js";import{s as j}from"./Action-CeCtXdjv.js";import{J as y,h as B,L as P}from"./DateField-YXtwXOjU.js";import{D as e}from"./DatePicker-DP1X0OqK.js";import"./index-Cun1SEai.js";import"./dynamic-BrDu037J.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./clsx-B-dksMZM.js";import"./index-C1m14znk.js";import"./FieldError-BdEz1ju8.js";import"./IconWarning-Bd2S-Yd8.js";import"./FieldError-BQtr77Yc.js";import"./utils-B12eWPaZ.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./browser-C459Qnce.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./ContextMenuSection-DqvIY19i.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./useStatic-1YPHy18H.js";import"./context-CVZR0KsW.js";import"./Form-r-7bApRf.js";import"./Group-BxNa3NfW.js";import"./Input-D8C7sCTv.js";import"./useFormValidation-GdVWjc_V.js";import"./useFormReset-D7H6HyHT.js";import"./useSpinButton-BN1ORG6C.js";import"./useFilter-CSNZA3Ft.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-D2XSaC_F.js";import"./useOverlayController-B3CyRh3q.js";import"./OverlayContextProvider-DD0eGq15.js";import"./ClearPropsContextView-CYMEx9M6.js";import"./RangeCalendar-CAqVWCe2.js";import"./Heading-DLcHG4v5.js";import"./useUpdateEffect-bQRNxbAd.js";import"./useMakeFocusable-DhpPn-fN.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Kr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Kr as __namedExportsOrder,Jr as default};
