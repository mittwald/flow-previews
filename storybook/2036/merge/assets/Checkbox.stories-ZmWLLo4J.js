import{j as r}from"./iframe-skRbRPoL.js";import{a as l,u as x,F as h,t as b}from"./Form-Bp5psqD5.js";import{B as m}from"./Button-Dz0DuBiT.js";import{S as T}from"./Section-DOyYK0OC.js";import{A as S}from"./ActionGroup-DcKdxNCn.js";import{s as f}from"./Action-BwiD4nix.js";import{C as i}from"./Checkbox-DySusWSB.js";import{T as g}from"./Text-CrBUObvU.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bawolgzq.js";import"./IconWarning-DXpZ8EkD.js";import"./FieldError-CQn8D9rY.js";import"./utils-BGdTTFGe.js";import"./Text-CUtREENU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./browser-5dwj1raN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./ContextMenuSection-Bs_nt5W1.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./context-BgdpZ9Nh.js";import"./useStatic-DAiG3iJH.js";import"./RSPContexts-x0Tynp33.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Switch-B4JasYcK.js";import"./useMakeFocusable-Vdb5-otp.js";import"./useToggleState-CGi4neW0.js";import"./useFormReset-i0yRktMd.js";import"./getActionGroupSlot-DYUIykqS.js";import"./Form-B2_iaNmT.js";import"./useFormValidation-C1IjZLpu.js";import"./EmulatedBoldText-bw_ADscr.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),s=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"acceptTerms",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsDefaultValue",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(i,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(i,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Dr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Dr as __namedExportsOrder,kr as default};
