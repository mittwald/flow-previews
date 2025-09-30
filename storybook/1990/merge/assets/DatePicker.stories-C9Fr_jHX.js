import{j as r}from"./iframe-Dmf5T25c.js";import{a as x,u as h,F as f,t as D}from"./Form-m_PW291X.js";import{L as o}from"./Label-CBoBMaMu.js";import{B as n}from"./Button-DJAJQ6nX.js";import{S}from"./Section-CuethHEJ.js";import{A as g}from"./ActionGroup-L54X6gLb.js";import{s as j}from"./Action-7bo_XniG.js";import{J as y,h as B,L as P}from"./DateField-Ciw09_2a.js";import{D as e}from"./DatePicker-B4LLUH9I.js";import"./index-Cun1SEai.js";import"./dynamic-Do2mwXEo.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./clsx-B-dksMZM.js";import"./index-C0-6kTd0.js";import"./FieldError-BrbRFqe2.js";import"./IconWarning-1UlzAmnA.js";import"./FieldError-osDHr7AF.js";import"./utils-DsML-bt_.js";import"./Text-DgEV6luH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./context-CfglF3Ge.js";import"./browser-DrFxiFmb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./Text-DLrkajvz.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./ContextMenuSection-DC2rWjKA.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./useStatic-B7bUROdd.js";import"./context-DfHcYJaf.js";import"./Form-CioSAe3u.js";import"./Group-C7lBiOpp.js";import"./Input-CEe4Geo-.js";import"./useFormValidation-BlVKI6aj.js";import"./useFormReset-BQs2ByJh.js";import"./useSpinButton-NC07UgYC.js";import"./useFilter-DrpowCyT.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-BaPL_3pu.js";import"./useOverlayController-BP8yeNHr.js";import"./OverlayContextProvider-ryh_mCsN.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./RangeCalendar-CPjE2aj6.js";import"./Heading-C9XhdvxD.js";import"./useUpdateEffect-N8hScL0W.js";import"./useMakeFocusable-qiIWJ0kB.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
