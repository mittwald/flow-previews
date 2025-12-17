import{j as r,r as g}from"./iframe-D2Ryv2XM.js";import{u as c,F as d}from"./Form-D-bCb0z0.js";import{B as f}from"./Button-0ymElbGx.js";import{S as b}from"./Section-B5eWJ7cO.js";import{A as E}from"./ActionGroup-DNKY23T8.js";import{s as u}from"./Action-P2r8aGEo.js";import{A as i}from"./Autocomplete-DcYCqa0A.js";import{L as p}from"./Label-Dm7SPIiB.js";import{T as l}from"./TextField-CU1-0Wjr.js";import{O as T}from"./Option-FxhcBEwy.js";import{F as B}from"./FieldError-Df9KKLMS.js";import{R as h}from"./ResetButton-BsZgDZaX.js";import{t as A,F}from"./Field-rJhDd3xD.js";import{S as x}from"./SubmitButton-CH__5W-V.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-k7JOs1GI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";import"./utils-BqLZYyR8.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./Label-BRB94mKh.js";import"./Hidden-BS4L5nhJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./ContextMenuSection-jWpLoqR_.js";import"./lib-90ocxLs-.js";import"./Dialog-Dv3Dn_KI.js";import"./RSPContexts-B-8XijCb.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./dynamic-CYMBERZG.js";import"./getActionGroupSlot-W54WmM0W.js";import"./useStatic-Dp5ohCc9.js";import"./context-FPyrczIP.js";import"./useFieldComponent-w9ZrCArw.js";import"./useFilter-DwLU2xMC.js";import"./useOverlayController--hBRUqQr.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-TEXU_mvo.js";import"./FieldDescription-CYrFJZP5.js";import"./TextField-dqp2wQe0.js";import"./FieldError-CWHVrlnl.js";import"./Form-HDxy_CB-.js";import"./Group-ONole-Nc.js";import"./Input-B6UkKbKT.js";import"./useTextField-5tyHJfNY.js";import"./useFormReset-BscIah2r.js";import"./useFormValidation-DGXgC3JE.js";import"./useControlledHostValueProps-BpR4WfzB.js";import"./Popover-DUxHcx38.js";import"./OverlayContextProvider-B2OZPBTA.js";import"./ListBox-DHqizTpM.js";import"./DragAndDrop-B6PXjiOh.js";import"./inertValue-CyRDpByh.js";import"./useListState-DF25WG1G.js";import"./IconDanger-DUFERqG9.js";import"./useRef-CNxeDH63.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=A(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(E,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,pe as __namedExportsOrder,ne as default};
