import{r as g,j as e}from"./iframe-COJ9RE48.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-ClaeOlVC.js";import{L as i}from"./Label-B42D24b-.js";import{B as d}from"./Button-CMQanS4m.js";import{S as F}from"./Section-CUB_WQoM.js";import{A as b}from"./ActionGroup-De8HYD8X.js";import{s as u}from"./ActionBatch-BL-a0sfJ.js";import{S as s,a as r}from"./Segment-Bw1BNJAF.js";import{F as v}from"./FieldError-CCI4UyFC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTxK5DLa.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./clsx-B-dksMZM.js";import"./index-D5EZb4o9.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./ActionGroupView-fMLXotgU.js";import"./Content-CnaSOdl5.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./utils-mqorQ4Bj.js";import"./Text-Bzpr-GrC.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./Modal-DApCOQ01.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./Overlay-DCP7Ml7p.js";import"./OverlayContextProvider-CBc03cFF.js";import"./LoadingSpinner-CBTolouR.js";import"./IconWarning-BMwiqmvN.js";import"./remote-BHpqvLOn.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./ButtonView-BPjbrkaq.js";import"./Flex-DKLR47fR.js";import"./useRef-CyM80vuH.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BD_6r0jM.js";import"./getActionGroupSlot-CmDqFskk.js";import"./useFieldComponent-C2vXV8Pm.js";import"./useMakeFocusable-DGR34_TP.js";import"./RadioGroup-B3maErmT.js";import"./FieldError-GKNsJ0Cn.js";import"./Form-DdhXtOmH.js";import"./useFormValidation-DQ8UK_oB.js";import"./useFormReset-BVeU8GRO.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
