import{j as e,r as g}from"./iframe-BmKAGSU1.js";import{b as a,u as l,F as c,t as j}from"./Form-BUFqVqMY.js";import{L as i}from"./Label-8kdX7ehW.js";import{R as p,S as h}from"./ResetButton-AYS94spP.js";import{B as d}from"./Button-LvEI1uQm.js";import{S as F}from"./Section-Bl2UAmSX.js";import{A as b}from"./ActionGroup-C3uaClAH.js";import{s as u}from"./Action-DOyYDw1l.js";import{S as s,a as r}from"./Segment-o2gtBOml.js";import{F as v}from"./FieldError-DTx5qYoC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4IbUBFl1.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./clsx-B-dksMZM.js";import"./index-D3Sif_iZ.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./context-CxuOL-5x.js";import"./browser-SWtWUPW6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQLEPw36.js";import"./utils-g5fx1pEf.js";import"./Hidden-tXnJ8R5f.js";import"./useRef-BPZx9XSF.js";import"./IconWarning-imbji-Kz.js";import"./remote-DfYMV5Tv.js";import"./Text-C9Y-BRqi.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5vvsijg.js";import"./ProgressBar-Cladi115.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JhlebSO6.js";import"./useFocus-BW6_4Fc3.js";import"./useFocusRing-DBug8spT.js";import"./useFocusable-BP0ye7iu.js";import"./ContextMenuSection-ChJFKHwG.js";import"./Dialog-DjPgQ4DH.js";import"./RSPContexts-BuF39hXg.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useControlledState-TVCSEq66.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./useStatic-7Dbn5SyA.js";import"./context-B4Nnt3qw.js";import"./useFieldComponent-DWe8fYc4.js";import"./useMakeFocusable-DMRps9O1.js";import"./RadioGroup-DETV6bWP.js";import"./FieldError-DtXh5FLR.js";import"./Form-B3BOXvjK.js";import"./useFormValidation-BWMCHu6j.js";import"./useFormReset-DXCfJDY-.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,We as __namedExportsOrder,Pe as default};
