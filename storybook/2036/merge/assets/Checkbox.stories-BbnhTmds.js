import{j as r}from"./iframe-Co5olYEg.js";import{a as l,u as x,F as h,t as b}from"./Form-KJ02LKVv.js";import{B as m}from"./Button-W4WIo1el.js";import{S as T}from"./Section-DKEvIbkh.js";import{A as S}from"./ActionGroup-ByB8rRUO.js";import{s as f}from"./Action-Cid4LteC.js";import{C as i}from"./Checkbox-Bm-eNe36.js";import{T as g}from"./Text-D64yDBkh.js";import"./index-Cun1SEai.js";import"./dynamic-DrcT1vJi.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./clsx-B-dksMZM.js";import"./FieldError-ozznJ0Nd.js";import"./IconWarning-Deg5RPPa.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./context-VmB2ki6S.js";import"./browser-Lvchr8XH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BWYiyAlu.js";import"./useFocus-D_PcVBPO.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./ContextMenuSection-BCeGxmuy.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Switch-Djj9tj67.js";import"./useMakeFocusable-DB3B4rem.js";import"./useToggleState-4TXdrtqZ.js";import"./useFormReset-CgjW6y2V.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./Form-XAAYfRmY.js";import"./useFormValidation-CpjqECXn.js";import"./EmulatedBoldText-m8x9dOVA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),s=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"acceptTerms",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsDefaultValue",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(i,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(i,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
