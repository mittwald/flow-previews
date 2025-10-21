import{j as e,r as S}from"./iframe-DALqHAyB.js";import{a as l,u as c,F as d,t as g}from"./Form-DWtgofJo.js";import{L as s}from"./Label-DyIG2v27.js";import{B as i}from"./Button-BbfkfOCO.js";import{S as x}from"./Section-DauTDmMy.js";import{A as F}from"./ActionGroup-BmRr98fb.js";import{s as u}from"./Action-yEvGmIpX.js";import{S as a,a as r}from"./Segment-BEoUrnyq.js";import{F as j}from"./useFieldComponent-CuLkv2Wr.js";import"./index-nuYtCEEu.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./browser-pVqjrops.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D28Pduqa.js";import"./utils-C0MA_VWy.js";import"./Hidden-SLgE1qP8.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./dynamic-aVFvjRkA.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./useStatic-WJbJZsQS.js";import"./context-CWEo3fLe.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./RadioGroup-Dq4sNq2w.js";import"./Form-DuNFHANS.js";import"./useFormValidation-C14rVgab.js";import"./useFormReset-C8DxwuW7.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,v=b("submit"),Me={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async f=>{await u(5e3),v(f)},p=c({defaultValues:{user:""}}),h=g();return e.jsx(d,{form:p,onSubmit:t,children:e.jsxs(x,{children:[e.jsx(h,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(F,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return S.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <SegmentedControl isInvalid>
          <Label>Role</Label>
          <Segment value="admin">Admin</Segment>
          <Segment value="member">Member</Segment>
          <Segment value="accountant">Accountant</Segment>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SegmentedControl>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
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
}`,...m.parameters?.docs?.source}}};const _e=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,_e as __namedExportsOrder,Me as default};
