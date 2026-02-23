import{r as g,j as e}from"./iframe-BoiTaxGN.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-W7v6pmtV.js";import{L as i}from"./Label-DgN2b341.js";import{B as d}from"./Button-MYsVPgLO.js";import{S as F}from"./Section-Cq-t_YW4.js";import{A as b}from"./ActionGroup-aDJBka0X.js";import{s as u}from"./ActionBatch-D2Yqxa5D.js";import{S as s,a as r}from"./Segment-C822izrL.js";import{F as v}from"./FieldError-DjT7Sc36.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X8snMUB4.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./ActionGroupView-dG558uao.js";import"./Content-Bi6LQS0I.js";import"./Heading-9cwIlFFB.js";import"./Heading-BcC1Qw26.js";import"./RSPContexts-9T8dsftx.js";import"./utils-RetFhwyR.js";import"./Text-ClfpXeTF.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./Modal-BCaxB9zM.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./Overlay-CDL6WOnf.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./LoadingSpinner-BBdroSRA.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Dialog-BL8T3CnU.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./ButtonView-Jmrl6E5f.js";import"./Flex-BlwptNjQ.js";import"./useRef-CEacQt_r.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./useFieldComponent-DiiGd8t3.js";import"./useMakeFocusable-CJoufYRj.js";import"./RadioGroup-C7XIbyqI.js";import"./FieldError-C1wD6V1t.js";import"./Form-BMda5et4.js";import"./useFormValidation-CX6eZKbg.js";import"./useFormReset-DsmV2EC6.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ve=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ve as __namedExportsOrder,Ue as default};
