import{r as g,j as e}from"./iframe-uf-MKLgq.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-Cec_c7cn.js";import{L as i}from"./Label-CnhLMz3J.js";import{B as d}from"./Button-mfbo0dyR.js";import{S as F}from"./Section-DfvDcT38.js";import{A as b}from"./ActionGroup-Calx21Na.js";import{s as u}from"./ActionBatch-zb8alXiJ.js";import{S as s,a as r}from"./Segment-Bm4HpPbh.js";import{F as v}from"./FieldError-DuL8_ys6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fPlHFb8V.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./RSPContexts-nECt4NUH.js";import"./utils-DZ6AixXo.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./Modal-sJUQoHJz.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./Overlay-B_vOLFC2.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./LoadingSpinner-CRqWvqjj.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./ButtonView-D8n4Xnyv.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-HEPeHMf2.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useFieldComponent-oiltg6td.js";import"./useMakeFocusable-C7I8z0mP.js";import"./RadioGroup-BxPaHw_6.js";import"./FieldError-hMdCLiLA.js";import"./Form-Clq2RMYH.js";import"./useFormValidation-DWm9SC-U.js";import"./useFormReset-D43--mAD.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
