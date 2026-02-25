import{r as g,j as r}from"./iframe-CFTqgbub.js";import{a as s,u as a,F as p,R as d,S as c,t as F}from"./ResetButton-BsnX_xmS.js";import{L as n}from"./Label-GwGXhrLq.js";import{B as l}from"./Button-DYo4uywI.js";import{S}from"./Section-DUGYD1S5.js";import{A as b}from"./ActionGroup-CBwjeAhX.js";import{s as u}from"./ActionBatch-D8GPDYy5.js";import{S as m}from"./Slider-V1JYoEjU.js";import{F as j}from"./FieldError-CYjuAiBI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-GrVhUXuF.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./clsx-B-dksMZM.js";import"./index-B_-FfeBA.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./ActionGroupView-BE1yaK9j.js";import"./Content-CuF6CEcC.js";import"./Heading-439pSAMO.js";import"./Heading-D2J3_q6l.js";import"./RSPContexts-CFURB7yy.js";import"./utils-B4tY5r2S.js";import"./Text-DGb4Yj-N.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./Modal-bFHglDPM.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./Overlay-BHE1PsiE.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./Dialog-BnZ8dnOj.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./ButtonView-B-4zjQiO.js";import"./Flex-DlegQ8We.js";import"./useRef-Bmtm6YEx.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C0W18m8x.js";import"./getActionGroupSlot-B6jQShKX.js";import"./useFieldComponent-CbaMz5aY.js";import"./useFormReset-BbhAN2Ls.js";import"./FieldError-DNv3qA2U.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await u(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,e as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
