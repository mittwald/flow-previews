import{j as r,r as g}from"./iframe-BBX1MRm7.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-Db5RrJnJ.js";import{B as f}from"./Button-BqkPfHUM.js";import{S as E}from"./Section-BkJ3a6Gx.js";import{A as T}from"./ActionGroup-CxYNjMjy.js";import{s as u}from"./Action-NfMU4pZQ.js";import{A as i}from"./Autocomplete-D2bi1aLy.js";import{L as p}from"./Label-rzq6PBW8.js";import{T as l}from"./TextField-C0PtLRzI.js";import{O as B}from"./Option-KV0vv1m_.js";import{F as A}from"./FieldError-DhG2ZYTr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGdtYp29.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./clsx-B-dksMZM.js";import"./index-CaVys9ny.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./useRef-DzuR5EZW.js";import"./utils-BavrKavc.js";import"./ButtonView-DtpzIIn9.js";import"./browser-94--rh0I.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./Text-bZjB6G95.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJia7Ggt.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C19iJYYn.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./ContextMenuSection-C-rpOjJk.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useControlledState-hVcOsExM.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./useStatic-eT6_SwdI.js";import"./context-CbNZJEnz.js";import"./useOverlayController-UE1-I0TE.js";import"./useFieldComponent-B_qWTKJx.js";import"./useFilter-DAn95UZH.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BECaGeob.js";import"./FieldDescription-D0h9kvob.js";import"./TextField-B6jqJ0Dq.js";import"./FieldError-C_UdMObt.js";import"./Form-CFIny17O.js";import"./Group-C1xuy7HP.js";import"./Input-DVyLg-xr.js";import"./useTextField-Bwh7GfLW.js";import"./useFormReset--Sx8IrxJ.js";import"./useFormValidation-CjGCqCfM.js";import"./useControlledHostValueProps-DKX7miYN.js";import"./Popover-DfKYmgoY.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./ListBox-BRfs98Ea.js";import"./DragAndDrop-CkZ1nCPU.js";import"./inertValue-ruyuFScC.js";import"./useListState-Bo1Ted2G.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
