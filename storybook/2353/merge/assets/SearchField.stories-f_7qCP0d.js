import{r as S,j as r}from"./iframe-DjjV-bH6.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-CcrR8bvt.js";import{L as m}from"./Label-BylmPkwQ.js";import{B as d}from"./Button-B7eEYP7w.js";import{S as j}from"./Section-B5rJlWeq.js";import{A as b}from"./ActionGroup-Bya-cpEz.js";import{s as c}from"./ActionBatch-YJb9tMXC.js";import{S as s}from"./SearchField-vNx8vrF6.js";import{F as E}from"./FieldError-B3mp1Ofg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsvgyJR.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./ActionGroupView-HPF2WmGA.js";import"./Content-D3ZFFpbf.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./RSPContexts-C5x5s972.js";import"./utils-Wzr-xt4Q.js";import"./Text-B3EwbE0r.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./Modal-CGyNAbyv.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./Overlay-CeUaOkpN.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./LoadingSpinner-DTU1PYFj.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./ButtonView-BQL8Rbhr.js";import"./Flex-C9E3B9yt.js";import"./useRef-Pg3VAXpj.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DWXh8VII.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./useFieldComponent-DlP24hgD.js";import"./useControlledHostValueProps-DfY517eL.js";import"./FieldError-cqIqfLoK.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useTextField-CEXXySrl.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
