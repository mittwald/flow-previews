import{j as r}from"./iframe-BA6fDn45.js";import{a as l,u as x,F as h,t as b}from"./Form-BwCYqKcw.js";import{B as m}from"./Button-CMSL1MHe.js";import{S as T}from"./Section-BxQ4KpXF.js";import{A as S}from"./ActionGroup-BWtgkqY9.js";import{s as f}from"./Action-CxZ_aWnU.js";import{C as s}from"./Checkbox-D5ma_e3m.js";import{T as g}from"./Text-BB_jWM0A.js";import"./index-Cun1SEai.js";import"./dynamic-B5xcbnuy.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./clsx-B-dksMZM.js";import"./index-DorRoXow.js";import"./FieldError-C4B-9J1n.js";import"./IconWarning-RvG5V2Gg.js";import"./FieldError-DSSHPUap.js";import"./utils-B0PKDg6J.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./browser-BAFOwcQV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./getActionGroupSlot-DOaaGACl.js";import"./useStatic-Dc3NgXvq.js";import"./context-aU6YV9zZ.js";import"./Form-BO5siFlo.js";import"./useFormValidation-Da1DrGKi.js";import"./useToggleState-Bf4nXT1y.js";import"./useFormReset-DffYIxF4.js";import"./EmulatedBoldText-Dom6ilWt.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Er={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),i=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(i,{name:"acceptTerms",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsDefaultValue",children:r.jsx(s,{children:"Accept terms"})}),r.jsx(i,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(s,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},o={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(s,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
