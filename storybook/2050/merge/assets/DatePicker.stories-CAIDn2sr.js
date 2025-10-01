import{j as r}from"./iframe-DRU2mvvl.js";import{a as x,u as h,F as f,t as D}from"./Form-DXkXYe5Y.js";import{L as o}from"./Label-BMa7ap8T.js";import{B as n}from"./Button-B0nESNPa.js";import{S}from"./Section-BqGqHoUM.js";import{A as g}from"./ActionGroup-D1ho32W2.js";import{s as j}from"./Action-DTfm05Ga.js";import{J as y,h as B,L as P}from"./DateField-D-wm8HTA.js";import{D as e}from"./DatePicker-CM-08SaU.js";import"./index-Cun1SEai.js";import"./dynamic-BlISIwZy.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./clsx-B-dksMZM.js";import"./index-BV-9eFwZ.js";import"./FieldError-DvrKLXyD.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./utils-CFpcVBbf.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./browser-DycDZ9Cy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./Text-CEDtxg_Y.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./useStatic-ZRFoobPh.js";import"./context-BmZA5kUX.js";import"./Form-BR3m4Qab.js";import"./Group-C-0gJbtA.js";import"./Input-Hz2jOfAo.js";import"./useFormValidation-BPBMmZYe.js";import"./useFormReset-BYiU13z5.js";import"./useSpinButton-LakcS0y9.js";import"./useFilter-BDbYZRq5.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-6CLh3lVk.js";import"./useOverlayController-DdAbU6-E.js";import"./OverlayContextProvider-BinHXkpi.js";import"./ClearPropsContextView-BOQrNGpC.js";import"./RangeCalendar-DfxdlCMG.js";import"./Heading-Dpu9vKUA.js";import"./useUpdateEffect-BQzJmyfI.js";import"./useMakeFocusable-BXp11O4i.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Kr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Kr as __namedExportsOrder,Jr as default};
