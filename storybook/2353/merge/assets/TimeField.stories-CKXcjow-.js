import{r as x,j as r}from"./iframe-DjjV-bH6.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-CcrR8bvt.js";import{L as t}from"./Label-BylmPkwQ.js";import{B as l}from"./Button-B7eEYP7w.js";import{S as b}from"./Section-B5rJlWeq.js";import{A as E}from"./ActionGroup-Bya-cpEz.js";import{s as c}from"./ActionBatch-YJb9tMXC.js";import{L as S}from"./DateInput-C45xbpU2.js";import{T as o}from"./TimeField-lsZY--43.js";import{F as T}from"./FieldError-B3mp1Ofg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsvgyJR.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./ActionGroupView-HPF2WmGA.js";import"./Content-D3ZFFpbf.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./RSPContexts-C5x5s972.js";import"./utils-Wzr-xt4Q.js";import"./Text-B3EwbE0r.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./Modal-CGyNAbyv.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./Overlay-CeUaOkpN.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./LoadingSpinner-DTU1PYFj.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./ButtonView-BQL8Rbhr.js";import"./Flex-C9E3B9yt.js";import"./useRef-Pg3VAXpj.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DWXh8VII.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./FieldError-cqIqfLoK.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./useSpinButton-B1JPi9gU.js";import"./useFilter-DkPcBiEU.js";import"./useFieldComponent-DlP24hgD.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
