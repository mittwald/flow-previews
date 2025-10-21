import{j as r}from"./iframe-DW8JgK09.js";import{a as l,u as x,F as h,t as b}from"./Form-CbwLg-A7.js";import{B as m}from"./Button-DVfVMpGI.js";import{S as T}from"./Section-BDXmkbnW.js";import{A as S}from"./ActionGroup-DxaPJSWg.js";import{s as f}from"./Action-CbSL4lf7.js";import{C as s}from"./Checkbox-DprEmQm-.js";import{T as g}from"./Text-DqrSOA-D.js";import"./index-Cun1SEai.js";import"./dynamic-B0cR68qH.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./clsx-B-dksMZM.js";import"./index-7zpoyBXT.js";import"./FieldError-DC6xH_3a.js";import"./IconWarning-Bj3cOyEj.js";import"./FieldError-D4VyS34i.js";import"./utils-qQbsMKok.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./context-MVg0njeL.js";import"./browser-Ddqyq5_4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Gti5y3pG.js";import"./useFocus-BeoGO6Gw.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./ContextMenuSection-CcJ6gQBU.js";import"./Dialog-Ch87mkCh.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./VisuallyHidden-Da3g07dP.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./useStatic-Dd3Fa8_Q.js";import"./context-BXN8qI2U.js";import"./Form-DQnvx-Rv.js";import"./useFormValidation-BJNwWy_2.js";import"./useToggleState-D27u0rcM.js";import"./useFormReset-DWeezvOC.js";import"./EmulatedBoldText-C-FDCcHS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Checkbox>
            <Text>Text</Text>
          </Checkbox>
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Or=["Default","WithFocusAndError"];export{e as Default,o as WithFocusAndError,Or as __namedExportsOrder,Er as default};
