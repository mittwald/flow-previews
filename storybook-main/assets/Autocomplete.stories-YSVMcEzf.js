import{r as g,j as r}from"./iframe-C_XCETJ4.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-DlCnoRdL.js";import{B as f}from"./Button-BRKehz01.js";import{S as E}from"./Section-BxK_Nbwa.js";import{A as T}from"./ActionGroup-CmEQbpco.js";import{s as u}from"./ActionBatch-TqepIOEV.js";import{A as i}from"./Autocomplete-BGEhM9o8.js";import{L as p}from"./Label-C05Lio9F.js";import{T as l}from"./TextField-BAZeDsNi.js";import{O as B}from"./Option-nJOR1jbk.js";import{F as A}from"./FieldError-Cv_CJ9jj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjbOT4dP.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./useRef-DPssy75n.js";import"./utils-Bso2FrGw.js";import"./ButtonView-CkPSl8Kd.js";import"./browser-BQl26QHV.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./ContextMenuSection-D5WrvUWV.js";import"./Dialog-BbJdb0zX.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./useStatic-CKCyvBOK.js";import"./context-BzuZVooY.js";import"./useOverlayController-C6c2wWeg.js";import"./useFieldComponent-K9rhjMxn.js";import"./useFilter-D4gRqk05.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-sh2cWMdB.js";import"./FieldDescription-9KiMe7M1.js";import"./TextField-BDy93HHg.js";import"./FieldError-5QFQIGqn.js";import"./Form-Bpra3FZF.js";import"./Group-BtgHmZ3N.js";import"./Input-54bUd5Aj.js";import"./useTextField-DD8e8EGD.js";import"./useFormReset-CmrFi5aC.js";import"./useFormValidation-CsbIfaDX.js";import"./Popover-Cr2hibE5.js";import"./OverlayContextProvider-Ben69tTv.js";import"./ListBox-CumJwxKb.js";import"./DragAndDrop-C7lwneHI.js";import"./inertValue-Bix0IzpC.js";import"./useListState-DXWEvg-D.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
