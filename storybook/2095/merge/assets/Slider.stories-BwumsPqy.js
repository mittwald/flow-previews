import{j as r,r as h}from"./iframe-BYlM8TfH.js";import{a,u as l,F as u,t as F}from"./Form-CVBWUNQi.js";import{L as e}from"./Label-CObvhZe8.js";import{B as m}from"./Button-DrjwoUCb.js";import{S as g}from"./Section-D4heV61s.js";import{A as x}from"./ActionGroup-D2zlXLO9.js";import{s as p}from"./Action-i4rkq48V.js";import{S as s}from"./Slider-BqHKI1Vm.js";import{F as S}from"./useFieldComponent-BoJq1S9B.js";import"./index-nuYtCEEu.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./browser-D2sPcOVM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-COiWxsLa.js";import"./utils-BDqIfUE7.js";import"./Hidden-CSqzjE-Z.js";import"./IconWarning-WQ4wo7kP.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Dialog-BSP5EDkY.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";import"./dynamic-BhGDraHV.js";import"./getActionGroupSlot-nR5vf13o.js";import"./useStatic-6sdTMqO6.js";import"./context-BILGmIqx.js";import"./useMakeFocusable-BmfPg07G.js";import"./useFormReset-Bl4vFhC1.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Lr as default};
