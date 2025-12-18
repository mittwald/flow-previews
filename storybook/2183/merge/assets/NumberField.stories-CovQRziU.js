import{j as r,r as x}from"./iframe-BTx5vfX7.js";import{u as a,F as l}from"./Form-BJsxvJji.js";import{L as o}from"./Label-D_U9lVoj.js";import{F as d,t as j}from"./Field-Byx7yqoA.js";import{B as u}from"./Button-D0j5fRAE.js";import{S as g}from"./Section-Cwd5koeW.js";import{A as b}from"./ActionGroup-BRc6QQmr.js";import{s as p}from"./Action-CSkp_lnv.js";import{N as t}from"./NumberField-sn7w4h7R.js";import{F as E}from"./FieldDescription-ylXyloZw.js";import{F as S}from"./FieldError-z-ClA5kd.js";import{R as c}from"./ResetButton-C1Ps8PPd.js";import{S as f}from"./SubmitButton-Cb8N2zXt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-D9-bvGMx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./Label-nt-Mf4T_.js";import"./utils-Rd_MYUg3.js";import"./Hidden-B6Npv2sL.js";import"./dynamic-D8ImZldj.js";import"./IconChevronDown-Bn-1yhHQ.js";import"./remote-CDkUNGK4.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./Text-DtYTBG7c.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";import"./ContextMenuSection-QYYvFEyc.js";import"./lib-90ocxLs-.js";import"./Dialog-CQOoDKQ_.js";import"./RSPContexts-BtkGYzrU.js";import"./OverlayArrow-eT6vjoGK.js";import"./useControlledState-DNSedTkS.js";import"./Collection-Bq23K6rA.js";import"./CollectionBuilder-BJtlCmWC.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./Separator-hpMdbhNe.js";import"./SelectionManager-ix7t88Nr.js";import"./useEvent-B9LXMUdK.js";import"./useCollator-BFlHC0Dr.js";import"./FocusScope-ConnSCr6.js";import"./VisuallyHidden-xosq-5v9.js";import"./getActionGroupSlot-D_UK-737.js";import"./useStatic-BtxQ9m_K.js";import"./context-q9yNmKLz.js";import"./useFieldComponent-a0kyTMto.js";import"./IconChevronUp-DW1oDfhv.js";import"./IconMinus-DcqrZges.js";import"./IconPlus-KnUpyfy_.js";import"./useControlledHostValueProps-DL2SxzgW.js";import"./FieldError-I1Bua9KH.js";import"./Form-BpaxdIp-.js";import"./Group-C7X32I-5.js";import"./Input-DfioYz8I.js";import"./useFormValidation-CWpL65wq.js";import"./useSpinButton-DHGQlUUG.js";import"./useFormReset-C2fqGBKA.js";import"./useTextField-ClY4yZY-.js";import"./IconDanger-C580gt5j.js";import"./useRef-xHYciXoC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
