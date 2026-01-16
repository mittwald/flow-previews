import{j as r,r as g}from"./iframe-DZ4teeW0.js";import{u as c,F as d,t as b,b as h}from"./Form-DTH9u47l.js";import{R as F,S as x}from"./ResetButton-Cubo-Q6d.js";import{B as f}from"./Button-DKoFnNBZ.js";import{S as E}from"./Section-239igX5r.js";import{A as T}from"./ActionGroup-CGiFoQ-O.js";import{s as u}from"./Action-IUgUGwCY.js";import{A as i}from"./Autocomplete-CR6KqI5V.js";import{L as p}from"./Label-DoWn6F4v.js";import{T as l}from"./TextField-LBvSvYZk.js";import{O as B}from"./Option-DJOwXnWQ.js";import{F as A}from"./FieldError-AZ-rkViQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DLpaDBxN.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./clsx-B-dksMZM.js";import"./index-hJtfnrYv.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./browser-BOIGtlkn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CmR_RyV0.js";import"./useRef-DPiX1vSz.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./ContextMenuSection-NaF-svH4.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useControlledState-CE05dG3o.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./useStatic-C2g0a5Fu.js";import"./context-CSe622gL.js";import"./useOverlayController-CclcYwrc.js";import"./useFieldComponent-D07Wu5hH.js";import"./useFilter-BFHtsTrL.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-G_iOTL3r.js";import"./FieldDescription-wBHtE-uB.js";import"./TextField-DVn_L58j.js";import"./FieldError-DkoCPEDN.js";import"./Form-DzpbW5Q4.js";import"./Group-CcFwVgnp.js";import"./Input-D0qY3wir.js";import"./useTextField-BGWNueLQ.js";import"./useFormReset-CHb94_Ie.js";import"./useFormValidation-DQHMrpfA.js";import"./useControlledHostValueProps-uUZrCOOz.js";import"./Popover-O3EK8S3M.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./ListBox-DIaRn7ek.js";import"./DragAndDrop-_iTVaPBW.js";import"./inertValue-QjH23mt0.js";import"./useListState-H3vxTEeD.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};
