import{r as g,j as r}from"./iframe-DGnxviCN.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-DcAZwnDv.js";import{B as f}from"./Button-BVsKVkL8.js";import{S as E}from"./Section-DY27wNHr.js";import{A as T}from"./ActionGroup-p4MSAjMl.js";import{s as u}from"./ActionBatch-CX-JwDue.js";import{A as i}from"./Autocomplete-Cp5H_Rqe.js";import{L as p}from"./Label-C_bFUpyc.js";import{T as l}from"./TextField-4t-jXf3b.js";import{O as B}from"./Option-bjwm5Ip0.js";import{F as A}from"./FieldError-D8VjacOs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjV52Fwj.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./clsx-B-dksMZM.js";import"./index-CLLV6gyd.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./context-UPqYfqWR.js";import"./ActionGroupView-CgnnpUaC.js";import"./Content-7cyJH864.js";import"./Heading-DTe6jOe1.js";import"./Heading-BzIJuxDf.js";import"./RSPContexts-DVx2WDHj.js";import"./utils-BkfS5ksp.js";import"./Text-VNnveGPv.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./Text-DvHtl8Bn.js";import"./Modal-Dxf8kS_f.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./Overlay-Dz43Qvxj.js";import"./OverlayContextProvider-DWOAvC95.js";import"./LoadingSpinner-DowiBEwh.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./Dialog-4LBd4V1R.js";import"./Button-BPmMTYs3.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyY11qHx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useControlledState-Tnf2yuXg.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./ButtonView-B9Wck9x_.js";import"./Flex-COS4YHsY.js";import"./useRef-CexGozGe.js";import"./ContextMenuSection-BcwKnSYu.js";import"./getActionGroupSlot-rP5M9435.js";import"./useFieldComponent-YlKWY1fY.js";import"./useFilter-Bcm0OKii.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BIbkMX3_.js";import"./FieldDescription-CXMcujUG.js";import"./TextField-BjemnuiU.js";import"./FieldError-er7nowFJ.js";import"./Form-DxH8Icum.js";import"./Group-Bidst4UD.js";import"./Input-BlrdZkUM.js";import"./useTextField-DgN6vDQ1.js";import"./useFormReset-DURLcehp.js";import"./useFormValidation-Dta_Z6Hx.js";import"./Popover-6gSZV124.js";import"./ListBox-BChYP2PD.js";import"./DragAndDrop-B0xl0Vt-.js";import"./inertValue-DzB7ty9x.js";import"./useListState-BfAZsvfy.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};
