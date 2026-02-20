import{r as S,j as r}from"./iframe-B-dt22EB.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-MnQ1Aqia.js";import{L as m}from"./Label-DPQ9pprY.js";import{B as d}from"./Button-Cfktl1nd.js";import{S as j}from"./Section-DON1SGHH.js";import{A as b}from"./ActionGroup-CPsTx0wa.js";import{s as c}from"./ActionBatch-DMUImU48.js";import{S as s}from"./SearchField-BZm9Pqw9.js";import{F as E}from"./FieldError-B26pZzZe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ci7OcZKZ.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./clsx-B-dksMZM.js";import"./index-D5JlC3xK.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./ActionGroupView-8d9OW_FE.js";import"./Content-CkcxiEPO.js";import"./Heading-8-mNxmV-.js";import"./Heading-jN8dhiFm.js";import"./RSPContexts-pIsu_52Z.js";import"./utils-DoxtMd58.js";import"./Text-BCqKdXYs.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./Text-vBmBwiIT.js";import"./Modal-DawRBJrb.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./Overlay-M9oVh3ML.js";import"./OverlayContextProvider-COc2hxmN.js";import"./LoadingSpinner-ISzATTs8.js";import"./IconWarning-BbozUbXF.js";import"./remote-D6Q14pEz.js";import"./Dialog-C7TrFuKD.js";import"./Button-CjYcjBnT.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgYKrzfD.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./ButtonView-DMF5dkJg.js";import"./Flex-C5vlWmVo.js";import"./useRef-BONyqAVJ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-3gHTEPd_.js";import"./getActionGroupSlot-DUUveJ77.js";import"./useFieldComponent-D2j3Q6-m.js";import"./useControlledHostValueProps-AfSNk-Xd.js";import"./FieldError-BkuObk6W.js";import"./Form-DTBJD-53.js";import"./Group-Cgb--nht.js";import"./Input-1avyZMmc.js";import"./useTextField-Dar2ncjY.js";import"./useFormReset-BwldCtpD.js";import"./useFormValidation-Ds3P2hMN.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
