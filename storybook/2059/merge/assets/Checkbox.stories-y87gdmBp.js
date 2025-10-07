import{j as r}from"./iframe-4Q3VdU3W.js";import{a as l,u as x,F as h,t as b}from"./Form-D0cPrVSZ.js";import{B as m}from"./Button-DtfrCWpg.js";import{S as T}from"./Section-BCaeDUwn.js";import{A as S}from"./ActionGroup-CDfjIgIF.js";import{s as f}from"./Action-BPLFS_xS.js";import{C as s}from"./Checkbox-6N-zrkrq.js";import{T as g}from"./Text-Dj8BftP4.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./Form-CQ3IrCNT.js";import"./useFormValidation-QKBec53c.js";import"./useToggleState-C3qElwVR.js";import"./useFormReset-DJaP_Vl0.js";import"./EmulatedBoldText-VlnzXvNR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
