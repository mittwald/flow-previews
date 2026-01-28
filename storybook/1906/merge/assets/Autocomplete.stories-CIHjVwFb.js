import{j as r,r as g}from"./iframe-CFLRrV9_.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-DjqnxgyX.js";import{B as f}from"./Button-C6DtPvCF.js";import{S as E}from"./Section-DcEQD72A.js";import{A as T}from"./ActionGroup-Cmk2pOgu.js";import{s as u}from"./Action--cE17EXA.js";import{A as i}from"./Autocomplete-T1bsM1H3.js";import{L as p}from"./Label-DDweLn-B.js";import{T as l}from"./TextField-CWce86ex.js";import{O as B}from"./Option-CscwHJcK.js";import{F as A}from"./FieldError-BY_h0DzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfUvB6Rc.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./useRef-BHiB85kd.js";import"./utils-9RAZgTTl.js";import"./ButtonView-C98-Wvmx.js";import"./browser-6ZyX-izP.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./LoadingSpinner-D6sn6dKn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LdOf-GEu.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./ContextMenuSection-KLSTc6el.js";import"./Dialog-CsaxLO_h.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./VisuallyHidden-DH38u7VP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./useStatic-Bo06Q_Yy.js";import"./context-CslVSGqZ.js";import"./useOverlayController-yVCc_ngp.js";import"./useFieldComponent-CywuRKF5.js";import"./useFilter-y5-pnbpw.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BlZuis7s.js";import"./FieldDescription-B2DMaMC5.js";import"./TextField-CFizmnK8.js";import"./FieldError-D073kW89.js";import"./Form-HxVpGshA.js";import"./Group-Cb05qa-m.js";import"./Input-QBFM7ItQ.js";import"./useTextField-DIM1ridr.js";import"./useFormReset-BcY6_uyQ.js";import"./useFormValidation-Cm_zD3mV.js";import"./useControlledHostValueProps-BmnwSt4u.js";import"./Popover-Dnnhcr9k.js";import"./OverlayContextProvider-0OCnXaQU.js";import"./ListBox-CgPlYJ5z.js";import"./DragAndDrop-Brrnu35a.js";import"./inertValue-B_P63T0x.js";import"./useListState-YMtfuLWY.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
