import{r as x,j as r}from"./iframe-DjjV-bH6.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-CcrR8bvt.js";import{L as o}from"./Label-BylmPkwQ.js";import{B as u}from"./Button-B7eEYP7w.js";import{S as g}from"./Section-B5rJlWeq.js";import{A as b}from"./ActionGroup-Bya-cpEz.js";import{s as p}from"./ActionBatch-YJb9tMXC.js";import{N as t}from"./NumberField-CCMkiBGa.js";import{F as E}from"./FieldDescription-CUJ0cPxq.js";import{F as S}from"./FieldError-B3mp1Ofg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXsvgyJR.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./ActionGroupView-HPF2WmGA.js";import"./Content-D3ZFFpbf.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./RSPContexts-C5x5s972.js";import"./utils-Wzr-xt4Q.js";import"./Text-B3EwbE0r.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./Modal-CGyNAbyv.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./Overlay-CeUaOkpN.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./LoadingSpinner-DTU1PYFj.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./ButtonView-BQL8Rbhr.js";import"./Flex-C9E3B9yt.js";import"./useRef-Pg3VAXpj.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DWXh8VII.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./useFieldComponent-DlP24hgD.js";import"./useControlledHostValueProps-DfY517eL.js";import"./FieldError-cqIqfLoK.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useFormValidation-CyR0-I-k.js";import"./useSpinButton-B1JPi9gU.js";import"./useFormReset-DovS_sbG.js";import"./useTextField-CEXXySrl.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
