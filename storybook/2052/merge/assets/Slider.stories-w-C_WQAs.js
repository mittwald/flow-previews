import{j as r,r as O}from"./iframe-CBVsO-nV.js";import{a,u as l,F as u,t as V}from"./Form-CMN9qLLC.js";import{L as t}from"./Label-nyljzuzS.js";import{B as m}from"./Button-CsBApO8I.js";import{S as B}from"./Section-B5x6AEB8.js";import{A as L}from"./ActionGroup-BWlbeHnL.js";import{s as p}from"./Action-D49cMU0u.js";import{S as s}from"./Slider-BLLcTKVQ.js";import{F as _}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bbbf1klh.js";import"./utils-BP7SriO_.js";import"./Hidden-CLTlUYi-.js";import"./IconWarning-BYVfnYfe.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./useMakeFocusable-D1yavyON.js";import"./useFormReset-0NTNnrBe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Wr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const e=async E=>{await p(1500),q(E)},y=l({defaultValues:{storage:50}}),j=V();return r.jsx(u,{form:y,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(j,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx(L,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=l();return O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(t,{children:"Storage"}),r.jsx(t,{children:"Field"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l();return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var d,c,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(c=o.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,F,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...(g=(F=i.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var x,S,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Dr as __namedExportsOrder,Wr as default};
