import{j as r}from"./iframe-CxmXe-_O.js";import{a as l,u as x,F as h,t as b}from"./Form-BHUWEINQ.js";import{B as m}from"./Button-DVo7WD-1.js";import{S as T}from"./Section-DzvPU-TL.js";import{A as S}from"./ActionGroup-JupVt7-E.js";import{s as f}from"./Action-CKP9QlTZ.js";import{C as i}from"./Checkbox-DTO_CJPB.js";import{T as g}from"./Text-BT2KT2kR.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./browser-fsrkaBj_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Form-CZOHyRg1.js";import"./useFormValidation-D2bFAqKZ.js";import"./EmulatedBoldText-D2nyMxZT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:l,render:()=>{const t=async F=>{await f(1500),B(F)},j=x({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),s=b();return r.jsx(h,{form:j,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"acceptTerms",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsDefaultValue",children:r.jsx(i,{children:"Accept terms"})}),r.jsx(s,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(i,{children:"Accept terms"})}),r.jsx(S,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(h,{form:t,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsx(i,{children:r.jsx(g,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
