import{j as r,r as g}from"./iframe-VGYf9uSR.js";import{u as c,F as d}from"./Form-CqpM73eC.js";import{t as b,F as h}from"./Field-FVf6FHyZ.js";import{B as f}from"./Button-C33JxfbF.js";import{S as E}from"./Section-DooU3tnD.js";import{A as T}from"./ActionGroup-BlzYnYWF.js";import{s as u}from"./Action-BU572vpz.js";import{A as i}from"./Autocomplete-DGpcHU87.js";import{L as l}from"./Label--ix077tG.js";import{T as p}from"./TextField-CGceQJXr.js";import{O as B}from"./Option-DBqm1sSn.js";import{F as A}from"./FieldError-CLzXjLUN.js";import{R as F}from"./ResetButton-CH8u8jqD.js";import{S as x}from"./SubmitButton-Q6E9h_vz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BXsOFxWd.js";import"./PropsContextProvider-BJkjz94f.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./ContextMenuSection-BlQWtT47.js";import"./lib-90ocxLs-.js";import"./context-DPoGZDoo.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./useStatic-DRLyxIeE.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./useFieldComponent-DiUYLu0s.js";import"./Activity-CX_biUm5.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useFilter-B-tjL8Bm.js";import"./Label.module-lamhxTiw.js";import"./TextFieldBase-DI1J7N7f.js";import"./TextField-C4mpb9SM.js";import"./FieldError-AWx0XaHn.js";import"./Form-CEBTvUmY.js";import"./Group-DDpm-w1G.js";import"./Input-DAGTqZv7.js";import"./useTextField-3t2wWbTv.js";import"./useFormReset-D2LFGRel.js";import"./useFormValidation-DNcRsa8m.js";import"./useControlledHostValueProps-zg0QpAjj.js";import"./Popover-eACQVYhK.js";import"./ListBox-CjagmIt1.js";import"./DragAndDrop-BxT2F2uE.js";import"./inertValue-D9CEcu3B.js";import"./useListState-fvHs3sr7.js";import"./IconDanger-B5Kx1O1H.js";import"./useRef-CXvi-_o4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(p,{isInvalid:!0,children:r.jsx(l,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,zr as default};
