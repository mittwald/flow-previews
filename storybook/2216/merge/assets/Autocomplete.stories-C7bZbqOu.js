import{j as r,r as g}from"./iframe-CYPvHnuu.js";import{u as c,F as d,t as b,b as h}from"./Form-DgiaaHrn.js";import{R as F,S as x}from"./ResetButton-bf1bv1xz.js";import{B as f}from"./Button-DytH811E.js";import{S as E}from"./Section-CHd7gCnn.js";import{A as T}from"./ActionGroup-DqvIB4F8.js";import{s as u}from"./Action-Db_hw0Ue.js";import{A as i}from"./Autocomplete-DckDS_lO.js";import{L as p}from"./Label-BTRY4Fha.js";import{T as l}from"./TextField-h1NhN9ls.js";import{O as B}from"./Option-DgsjE9u4.js";import{F as A}from"./FieldError-BvWeuB1p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLG3Xjqu.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./context-Dv0AyQUz.js";import"./browser-DHkGBw9W.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils---ZBHqUT.js";import"./useRef-BXFRsUMW.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./Text-B7HPZf5X.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./LoadingSpinner-If-eK7wE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BM3lF2Ud.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAll9lzw.js";import"./useFocus-Besr2u9O.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocusable-DNqkvuS2.js";import"./ContextMenuSection-Cvtue2Xc.js";import"./Dialog-DVySTr_M.js";import"./RSPContexts-B-l9PBN7.js";import"./OverlayArrow-c0UAwNBy.js";import"./useControlledState-CzL0wnxp.js";import"./Collection-CC7kOuB5.js";import"./CollectionBuilder-CcAo9kg0.js";import"./SelectionIndicator-CQjOYyqW.js";import"./Separator-B0yS3gpc.js";import"./SelectionManager-D6v8Hpa5.js";import"./useEvent-ZUbDwjtd.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";import"./getActionGroupSlot-D8XZvD04.js";import"./useStatic-Clnm1k9a.js";import"./context-BIqaEuJx.js";import"./useOverlayController-Dk-2lmPH.js";import"./useFieldComponent-K4osF3of.js";import"./useFilter-v_twpB_X.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-cOqhPmho.js";import"./FieldDescription-RtGqf3oZ.js";import"./TextField-Bmcb-2F7.js";import"./FieldError-DKbYNsKn.js";import"./Form-Bjo4WKP7.js";import"./Group-B-UmyINm.js";import"./Input-C71-o0Ak.js";import"./useTextField-310WTtjr.js";import"./useFormReset-DMfMEm_f.js";import"./useFormValidation-BOj1NNIZ.js";import"./useControlledHostValueProps-Di6e6qke.js";import"./Popover-DqKpgaaL.js";import"./OverlayContextProvider-B5UEEssH.js";import"./ListBox-B9hmg-P1.js";import"./DragAndDrop-BJSxS7HN.js";import"./inertValue-8MhytMUo.js";import"./useListState-D6V4OWhN.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};
