import{j as t}from"./iframe-BxDpVhRd.js";import{u as h,F as f,t as b,a as O}from"./Form-CR4vr6SN.js";import{B as m}from"./Button-COfabfFq.js";import{S as y}from"./Section-DXdLzCuH.js";import{A}from"./ActionGroup-DNCuAw2y.js";import{s as j}from"./Action-CQ_Tet5k.js";import{A as p}from"./Autocomplete-Cu1fag4t.js";import{L as F}from"./Label-CMeeurCB.js";import{T as B}from"./TextField-CLkMGK1E.js";import{O as n}from"./Option-sp0asJCX.js";import{S as v}from"./SearchField-BAeTrhD6.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./getActionGroupSlot-DfO33wTs.js";import"./ReactAriaControlledValueFix-CKJKlinu.js";import"./useFilter-CA4hB-zz.js";import"./TextFieldBase-DNquX7f5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C72SkzYM.js";import"./TextField-DQk9fvM2.js";import"./Form-DnVdWn9l.js";import"./Group-BMNJ9slh.js";import"./Input-CLCKEIJY.js";import"./useTextField-BZVylDiv.js";import"./useFormValidation-BO_UVXRs.js";import"./DragAndDrop-BeEFsgFc.js";import"./inertValue-B7wtkgAP.js";import"./useListState-DGjt2ov-.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Autocomplete>
            <SearchField>
              <Label>Test</Label>
            </SearchField>
            <Option value="example.com">example.com</Option>
            <Option value="domain.de">domain.de</Option>
            <Option value="test.org">test.org</Option>
          </Autocomplete>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Zt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Zt as __namedExportsOrder,Xt as default};
