import{j as e,r as S}from"./iframe-CgV0BA21.js";import{a as l,u as c,F as d,t as g}from"./Form-Njtp-qwK.js";import{L as s}from"./Label-Bxuf1S0W.js";import{B as i}from"./Button-CNT8DxS9.js";import{S as x}from"./Section-sLT7TF5r.js";import{A as F}from"./ActionGroup-uSz-erXb.js";import{s as u}from"./Action-DZ2Xrd6d.js";import{S as a,a as r}from"./Segment-DOtROFdu.js";import{F as j}from"./useFieldComponent-D1IKYPO_.js";import"./index-nuYtCEEu.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./clsx-B-dksMZM.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./browser-BkNcCpiL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CttY7hce.js";import"./utils-BtxgbS4l.js";import"./Hidden-jMQa5TyR.js";import"./IconWarning-Cjg_6qhe.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B3KDK_sh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh998neg.js";import"./useFocus-DCA5O52l.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./ContextMenuSection-DduOvbG6.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./dynamic-BuNxxpAs.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./useStatic-BN9Sd72d.js";import"./context-CRjcTZWJ.js";import"./useMakeFocusable-BcUeToCB.js";import"./RadioGroup-aNXSJSCI.js";import"./Form-Co57238C.js";import"./useFormValidation-AnXxOg_8.js";import"./useFormReset-DmIBBfXo.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,v=b("submit"),Me={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async f=>{await u(5e3),v(f)},p=c({defaultValues:{user:""}}),h=g();return e.jsx(d,{form:p,onSubmit:t,children:e.jsxs(x,{children:[e.jsx(h,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(F,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return S.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
