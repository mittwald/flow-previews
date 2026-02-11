import{r as g,j as r}from"./iframe-BnHQGzj-.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-fNAdGvYj.js";import{B as f}from"./Button-kOzdzwoL.js";import{S as E}from"./Section-SvACH-rM.js";import{A as T}from"./ActionGroup-BPljKUZx.js";import{s as u}from"./Action-D5FY68jf.js";import{A as i}from"./Autocomplete-B7EpX6gc.js";import{L as p}from"./Label-u3CIBBS-.js";import{T as l}from"./TextField-D2wyZYOl.js";import{O as B}from"./Option-Cc-cpTaM.js";import{F as A}from"./FieldError-hA7hA6sK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dg_y_eXk.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./context-oT0KmQcZ.js";import"./useRef-DC89URQK.js";import"./utils-B_drgFmA.js";import"./ButtonView-CPuOwsd2.js";import"./browser-Byd_T3zS.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Text-CP9lFNhL.js";import"./LoadingSpinner-DoB6VVvS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7nIxjvHJ.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./ContextMenuSection-BQD1q2_K.js";import"./Dialog-vlYkkLZ8.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";import"./getActionGroupSlot-DFydpqIy.js";import"./useStatic-CXOpTYPY.js";import"./context-CLHbEMzO.js";import"./useOverlayController-nmD6fAp8.js";import"./useFieldComponent-BKOZgMTQ.js";import"./useFilter-ZVwV8QpO.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-C85uCNsj.js";import"./FieldDescription-yrYvUz27.js";import"./TextField-CmEfXiDD.js";import"./FieldError-CfhVGgFS.js";import"./Form-B5QWBDfx.js";import"./Group-ZIuNhF8O.js";import"./Input-DmDHg40n.js";import"./useTextField-D3uZgsWg.js";import"./useFormReset-C2cP98Fi.js";import"./useFormValidation-CJa5Pm36.js";import"./Popover-By64ee4S.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./ListBox-B6Mtyndy.js";import"./DragAndDrop-CkBM5zDc.js";import"./inertValue-CR00P4UC.js";import"./useListState-By1DqfxE.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
