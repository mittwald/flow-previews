import{r as g,j as r}from"./iframe-Bvl8-Rhq.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-C3zAOGNm.js";import{B as f}from"./Button-_6nTdRI5.js";import{S as E}from"./Section-oIxjsMS9.js";import{A as T}from"./ActionGroup-vTKVeA17.js";import{s as u}from"./ActionBatch-TusZCIcz.js";import{A as i}from"./Autocomplete--Mx6MXsL.js";import{L as p}from"./Label-BVY1ryMc.js";import{T as l}from"./TextField-CBfEYB3v.js";import{O as B}from"./Option-Dp8Loqoi.js";import{F as A}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./Overlay-CgTeHkhl.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./utils-D7QihGpD.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./Text-BaIKemC9.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ActionGroupView-CTEFX79v.js";import"./Content-twBtn99c.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./Text-CBdBop4j.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Modal-DJXXBtnB.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./getActionGroupSlot-ConeELan.js";import"./useFieldComponent-D4BbqCv_.js";import"./useFilter-huNJg7KG.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BVnBHhop.js";import"./FieldDescription-BZOs9e_4.js";import"./TextField-Bw9AZxi0.js";import"./FieldError-Du4MQwEm.js";import"./Form-D70wz7aV.js";import"./Group-CdqV-_AW.js";import"./Input-DnkGytYm.js";import"./useTextField-CDBuSrx8.js";import"./useFormReset-C0JkbMmh.js";import"./useFormValidation-Cl3HF3fr.js";import"./Popover-lnpWKhcE.js";import"./ListBox-D7AThtaq.js";import"./DragAndDrop-BdOO0QJU.js";import"./inertValue-CqPoouzX.js";import"./useListState-cDAhVe41.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
