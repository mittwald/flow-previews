import{j as r}from"./iframe-CTxtjXon.js";import{a as l,u as x,F as h,t as b}from"./Form-B0b-E516.js";import{B as m}from"./Button-CTR-HA58.js";import{S as T}from"./Section-BY4zi19G.js";import{A as S}from"./ActionGroup-CzROJviL.js";import{s as f}from"./Action-DoHauz19.js";import{C as s}from"./Checkbox-DkBjtYJT.js";import{T as g}from"./Text-DQcec0AG.js";import"./index-Cun1SEai.js";import"./dynamic-BqhEVzNx.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./clsx-B-dksMZM.js";import"./index-BCkzqzEU.js";import"./FieldError-yMhB6vk6.js";import"./IconWarning-BCagwmXL.js";import"./FieldError-DPTagllN.js";import"./utils-Dyxd3-sq.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./browser-B97evyF-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./useStatic-FLOcJlac.js";import"./context-C6LdJJW6.js";import"./Form-aYocGFK9.js";import"./useFormValidation-PRBMAw7o.js";import"./useToggleState-DMPmy5mL.js";import"./useFormReset-dEYYJoAx.js";import"./EmulatedBoldText-Da4iAST0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
