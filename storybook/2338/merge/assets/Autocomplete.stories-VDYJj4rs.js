import{r as E,j as r}from"./iframe-CBpAxFwW.js";import{u as c,F as d,a as h,R as F,S as x,t as y}from"./ResetButton-DdOkIqmb.js";import{B as f}from"./Button-DJILh_tx.js";import{S as j}from"./Section-7R7SCXQ7.js";import{A as S}from"./ActionGroup-CIZlagD5.js";import{s as u}from"./ActionBatch-BgON7N4c.js";import{A as i}from"./Autocomplete-aJCOeSjX.js";import{L as a}from"./Label-D9Ki8i5H.js";import{T as l}from"./TextField-O3WXJJAC.js";import{O as T}from"./Option-CtBjw8O9.js";import{F as A}from"./FieldError-0XXNPrVk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./utils-DlBHsIHw.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./ContextMenuSection-CSCUKvfx.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useFilter-Cou16l0M.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-H85_02BB.js";import"./FieldDescription-cbN0tmKj.js";import"./TextField-U22TZmuN.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useTextField-W7kX8bZQ.js";import"./useFormReset-DcIaZXr3.js";import"./useFormValidation-D1j-Spao.js";import"./Popover-CbjXFr2h.js";import"./ListBox-CAYrtsTX.js";import"./DragAndDrop-DBcMvmg2.js";import"./inertValue-D3WrytAr.js";import"./useListState-Wt_3TDK_.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,w=B("submit"),p=(e="")=>["example.com","test.org","email.net","mail.com"].map(o=>{const t=`${e.split("@")[0]}@${o}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),so={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const e=async g=>{await u(1500),w(g)},o=c({defaultValues:{email:"asd@example.com"}}),t=y(),b=o.watch("email");return r.jsx(d,{form:o,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(b)]})}),r.jsxs(S,{children:[r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},n={render:e=>{const o=c();E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=o.watch("field");return r.jsx(d,{form:o,onSubmit:async()=>await u(2e3),children:r.jsxs(j,{children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...e,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(a,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})})}},m={render:e=>{const o=c(),t=o.watch("field");return r.jsxs(d,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(S,{children:[r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
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
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
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
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const no=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,no as __namedExportsOrder,so as default};
