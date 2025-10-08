import{j as r}from"./iframe-F0_qnNmG.js";import{a as l,u as x,F as h,t as b}from"./Form-CFfDByC-.js";import{B as m}from"./Button-6GY0aJmr.js";import{S as T}from"./Section-B3WAbWpL.js";import{A as S}from"./ActionGroup-BwHQ3W2X.js";import{s as f}from"./Action-rcgaEMhe.js";import{C as s}from"./Checkbox-Cz4QXKXd.js";import{T as g}from"./Text-DO7iLNcc.js";import"./index-Cun1SEai.js";import"./dynamic-Bv8wQ4eA.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./clsx-B-dksMZM.js";import"./index-Bz7U0goG.js";import"./FieldError-Cez4hVsO.js";import"./IconWarning-uipPPHio.js";import"./FieldError-Ba7AQt9l.js";import"./utils-sDrdBfYO.js";import"./Text-aPdZ_B4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./browser-Cnb-FwPQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-vo1xOT6L.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./ContextMenuSection-CVTYXQHy.js";import"./Dialog-DaSdBBae.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./useStatic-B-ONLx4H.js";import"./context-BzKhkjPO.js";import"./Form-Ca0x7b6g.js";import"./useFormValidation-CO-DTcJJ.js";import"./useToggleState-Cj1ngOjE.js";import"./useFormReset-yESpD6TP.js";import"./EmulatedBoldText-nQ9KrBk1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
