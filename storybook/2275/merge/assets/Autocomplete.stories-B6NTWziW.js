import{j as r,r as g}from"./iframe-BbrP11p-.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-C3DIgWLZ.js";import{B as f}from"./Button-D_6ZCoU5.js";import{S as E}from"./Section-OZiyRnMf.js";import{A as T}from"./ActionGroup-aeCzi1SV.js";import{s as u}from"./Action-DGTK2X9F.js";import{A as i}from"./Autocomplete-CNTBrtdn.js";import{L as p}from"./Label-DwqHoWx5.js";import{T as l}from"./TextField-BvZ3vJ0s.js";import{O as B}from"./Option-DgabqzGv.js";import{F as A}from"./FieldError-i_FUROXt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CazQQjW9.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./clsx-B-dksMZM.js";import"./index-CvmJvI2t.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./useRef-Cn0hFIKG.js";import"./utils-CfXF9mMB.js";import"./ButtonView-vY_sxMN2.js";import"./browser-CKsvW9Gw.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VHqnVNy0.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocusable-ssdBLHPa.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Dialog-BH0tiGTi.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./useStatic-DG6eeeN5.js";import"./context-DfqDLyvd.js";import"./useOverlayController-BZ__G9XQ.js";import"./useFieldComponent-CnZp8uAU.js";import"./useFilter-4QZ1d7_F.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DshWB0Iu.js";import"./FieldDescription-BZIDgIPl.js";import"./TextField-DD3L2ijb.js";import"./FieldError-C0mMT85u.js";import"./Form-Da-PMQ7G.js";import"./Group-CeCxvCTb.js";import"./Input-CrFs98bJ.js";import"./useTextField-Bxx5stu4.js";import"./useFormReset-VtyCL_TW.js";import"./useFormValidation-dfDtwXtG.js";import"./useControlledHostValueProps-BXJu_wEe.js";import"./Popover-CH9SEcQK.js";import"./OverlayContextProvider-CX8G0M5v.js";import"./ListBox-C5vpZDP2.js";import"./DragAndDrop-C-8QIpl-.js";import"./inertValue-WQQ5h8S8.js";import"./useListState-KjfKQ3GY.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
