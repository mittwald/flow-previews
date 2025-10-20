import{j as r,r as O}from"./iframe-CwuqIU3i.js";import{a,u as l,F as u,t as V}from"./Form-C_LQ2LWw.js";import{L as t}from"./Label-B0BiyK3O.js";import{B as m}from"./Button-BqbqUci_.js";import{S as B}from"./Section-LUqPWyIZ.js";import{A as L}from"./ActionGroup-K4almCLG.js";import{s as p}from"./Action-Dz8VIf0X.js";import{S as s}from"./Slider-CrUxuKg8.js";import{F as _}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./useMakeFocusable-ChwytvWt.js";import"./useFormReset-BLDFw02N.js";import"./react-children-utilities-BfKePjVo.js";import"./ClearPropsContext-DGTEyAkG.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Wr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const e=async E=>{await p(1500),q(E)},y=l({defaultValues:{storage:50}}),j=V();return r.jsx(u,{form:y,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(j,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx(L,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=l();return O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(t,{children:"Storage"}),r.jsx(t,{children:"Field"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l();return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var d,c,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(c=o.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,F,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
