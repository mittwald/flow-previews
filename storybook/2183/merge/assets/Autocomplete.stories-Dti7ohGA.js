import{j as r,r as g}from"./iframe-CH_aTfEL.js";import{u as c,F as d}from"./Form-Dq17XsDi.js";import{t as b,F as h}from"./Field-DweWJcaC.js";import{B as f}from"./Button-D53gB1eO.js";import{S as E}from"./Section-B-U_9AN9.js";import{A as T}from"./ActionGroup-DOhwLXSI.js";import{s as u}from"./Action-WNrTLAcY.js";import{A as i}from"./Autocomplete-CsCaCLQM.js";import{L as l}from"./Label-BqL_a1sm.js";import{T as p}from"./TextField-CbtbLC03.js";import{O as B}from"./Option-DWpno0q8.js";import{F as A}from"./FieldError-DGABQFH-.js";import{R as F}from"./ResetButton-CD3Uv-F4.js";import{S as x}from"./SubmitButton-DZnPOQnn.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-vwb-6_Ta.js";import"./PropsContextProvider-DjBCrPYH.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./useFieldComponent-JY3HqOd-.js";import"./Activity-DkWdwXP6.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useFilter-DhuyWMn1.js";import"./Label.module-lamhxTiw.js";import"./TextFieldBase-DhI98Y4Z.js";import"./TextField-D7FK5Y0z.js";import"./FieldError-CHaTpVnh.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./useTextField-CGjCcs3_.js";import"./useFormReset-P8yugG2W.js";import"./useFormValidation-qjJTrH9J.js";import"./useControlledHostValueProps-CI7mWjRd.js";import"./Popover-mq_MJ5zE.js";import"./ListBox-pIF7iLRi.js";import"./DragAndDrop-CNDFxbx4.js";import"./inertValue-Degg4URE.js";import"./useListState-DFU3QlEL.js";import"./IconDanger-DRvJdcN_.js";import"./useRef-CkIgL8Qx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(p,{isInvalid:!0,children:r.jsx(l,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
