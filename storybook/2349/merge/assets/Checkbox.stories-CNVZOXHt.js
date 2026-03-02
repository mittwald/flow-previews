import{r as x,j as r}from"./iframe-uf-MKLgq.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-Cec_c7cn.js";import{B as d}from"./Button-mfbo0dyR.js";import{S as j}from"./Section-DfvDcT38.js";import{A as b}from"./ActionGroup-Calx21Na.js";import{s as u}from"./ActionBatch-zb8alXiJ.js";import{C as t}from"./Checkbox-Cc8_9EQB.js";import{F as E}from"./FieldError-DuL8_ys6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fPlHFb8V.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./RSPContexts-nECt4NUH.js";import"./utils-DZ6AixXo.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./Modal-sJUQoHJz.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./Overlay-B_vOLFC2.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./LoadingSpinner-CRqWvqjj.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./ButtonView-D8n4Xnyv.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";import"./ContextMenuSection-HEPeHMf2.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useFieldComponent-oiltg6td.js";import"./FieldError-hMdCLiLA.js";import"./Form-Clq2RMYH.js";import"./useFormValidation-DWm9SC-U.js";import"./useToggleState-BBiYn79e.js";import"./useFormReset-D43--mAD.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
