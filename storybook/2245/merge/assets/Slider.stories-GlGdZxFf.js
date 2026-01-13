import{j as r,r as g}from"./iframe-YnzBkBP1.js";import{b as s,u as a,F as u,t as F}from"./Form-BEcwLgvh.js";import{L as n}from"./Label-F32H6fZQ.js";import{R as d,S as c}from"./ResetButton-DTcZkv1G.js";import{B as p}from"./Button-BvFsSv02.js";import{S}from"./Section-BF-oFw9b.js";import{A as b}from"./ActionGroup-Cw5QmZ4Y.js";import{s as l}from"./Action-DDQNlr1F.js";import{S as m}from"./Slider-BpMrAujs.js";import{F as j}from"./FieldError-CkABddBr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAiG6Vmq.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./clsx-B-dksMZM.js";import"./index-C9L7IfWC.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./context-Dc351FW_.js";import"./browser-Sf85iaAd.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TsHYY7iw.js";import"./utils-CRkRQkMM.js";import"./Hidden-Dq31wpMg.js";import"./useRef-Db3bAIIe.js";import"./IconWarning-CfrgrK5w.js";import"./remote-psJ_k7Km.js";import"./Text-CErt044E.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./LoadingSpinner-z9BQWCCX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NgaP4MvP.js";import"./useFocus-CEJfh5Ox.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./ContextMenuSection-Bzcd8RVm.js";import"./Dialog-971pU4tV.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./useControlledState-DwL8StHF.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./VisuallyHidden-BsENeWhO.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./useStatic-9o3ywd_N.js";import"./context-CGFBFC28.js";import"./useFieldComponent-BnDxVRXr.js";import"./useFormReset-3oD77Uyk.js";import"./FieldError-BIVQARwB.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ar={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
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
}`,...i.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,Ir as __namedExportsOrder,Ar as default};
