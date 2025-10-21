import{j as r,r as h}from"./iframe-CMcq8v1f.js";import{a,u as l,F as u,t as F}from"./Form-DzH8G5ZK.js";import{L as e}from"./Label-BIfXBQMD.js";import{B as m}from"./Button-CRhbM7FI.js";import{S as g}from"./Section-BVe8Ycpq.js";import{A as x}from"./ActionGroup-DppP5Nb_.js";import{s as p}from"./Action-DzVfKIry.js";import{S as s}from"./Slider-20eFbpkf.js";import{F as S}from"./useFieldComponent-B7IsP0qp.js";import"./index-nuYtCEEu.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./clsx-B-dksMZM.js";import"./index-Tcjlyiep.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./browser-BnbqEoZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CtMkNZ5K.js";import"./utils-B4_KO4f3.js";import"./Hidden-BSe2pCrZ.js";import"./IconWarning-pzLTBmMV.js";import"./Text-DOkc_YZA.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./ContextMenuSection-DtqQsaJ2.js";import"./Dialog-Drh022ms.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./dynamic-FUMijUiW.js";import"./getActionGroupSlot-CSYISPXH.js";import"./useStatic-CKvWQ5ch.js";import"./context-haW4s5UJ.js";import"./useMakeFocusable-B2ENdPIj.js";import"./useFormReset-DUTu2q8R.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
