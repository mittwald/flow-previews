import{j as r,r as h}from"./iframe-fd4MG1i8.js";import{a,u as l,F as u,t as F}from"./Form-DdKBNKRS.js";import{L as e}from"./Label-DcZaDq0J.js";import{B as m}from"./Button-VeSKQaWX.js";import{S as g}from"./Section-BCuosQzF.js";import{A as x}from"./ActionGroup-CZpdRo9u.js";import{s as p}from"./Action-b6bvpWZ7.js";import{S as s}from"./Slider-dCrjRv_T.js";import{F as S}from"./useFieldComponent-CTpQ-XZg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./clsx-B-dksMZM.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./browser-Dh_0Zrut.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cas_0aCA.js";import"./utils-Cwcb_ph1.js";import"./Hidden-DL9_D-g9.js";import"./IconWarning-9sqw3U7E.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./context-BDEE0OGh.js";import"./useMakeFocusable-DLeuMSJI.js";import"./useFormReset-NfLpwngh.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,y=b("submit"),Lr={title:"Integrations/React Hook Form/Slider",component:a,render:()=>{const t=async f=>{await p(1500),y(f)},d=l({defaultValues:{storage:50}}),c=F();return r.jsx(u,{form:d,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(c,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=l();return h.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=l();return r.jsxs(u,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
