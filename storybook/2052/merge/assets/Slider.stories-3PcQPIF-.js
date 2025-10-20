import{j as r,r as O}from"./iframe-CuPb25cv.js";import{a,u as l,F as u,t as V}from"./Form-D3dPEjiA.js";import{L as t}from"./Label-BZpLTozc.js";import{B as m}from"./Button-Cy_FSVpl.js";import{S as B}from"./Section-B55_57D7.js";import{A as L}from"./ActionGroup-BCzfYI9o.js";import{s as p}from"./Action-CE7P3CGA.js";import{S as s}from"./Slider-DJrLh0bf.js";import{F as _}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./useMakeFocusable-ByjuM3xE.js";import"./useFormReset-Cj0hiSlt.js";import"./react-children-utilities-OY5o0O78.js";import"./ClearPropsContext-1rzIpp4D.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Wr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const e=async E=>{await p(1500),q(E)},y=l({defaultValues:{storage:50}}),j=V();return r.jsx(u,{form:y,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(j,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx(L,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=l();return O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(t,{children:"Storage"}),r.jsx(t,{children:"Field"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l();return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(t,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var d,c,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(c=o.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,F,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
