import{j as r,r as x}from"./iframe-bJ_6fidF.js";import{b as a,u as l,F as d,t as j}from"./Form-Bkk_2nLu.js";import{L as o}from"./Label-jHNg7W3d.js";import{R as c,S as f}from"./ResetButton-LNdHyolG.js";import{B as p}from"./Button-BnsDuM8z.js";import{S as b}from"./Section-BIKV3qXu.js";import{A as g}from"./ActionGroup-CQfsB-uK.js";import{s as u}from"./Action-BNfya_PE.js";import{N as t}from"./NumberField-Us_jJdQ3.js";import{F as E}from"./FieldDescription-CvkvDToJ.js";import{F as S}from"./FieldError-D9NzXF8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B98QrFwh.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./context-BRobVGip.js";import"./browser-CDYbiXXK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ITTSHdKZ.js";import"./utils-2JACcOpK.js";import"./Hidden-D-D3cT6t.js";import"./useRef-IidQQV9-.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./useStatic-BZPvcAPs.js";import"./context-CiNdmr3l.js";import"./useFieldComponent-uPh6Au6A.js";import"./useControlledHostValueProps-TNG0Fwfb.js";import"./FieldError-BXkLcNaX.js";import"./Form-u1KpLyfA.js";import"./Group-DIFUJtkh.js";import"./Input-Cc8ouKNt.js";import"./useFormValidation-CfG5OslG.js";import"./useSpinButton-DW5yQJfd.js";import"./useFormReset-nMFTazsC.js";import"./useTextField-BE6Uy-6e.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Tr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Tr as default};
