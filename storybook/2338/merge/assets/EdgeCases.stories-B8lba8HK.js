import{r as s,j as o}from"./iframe-CEWg6_IX.js";import{M as n}from"./Modal-BUEX4x6z.js";import{B as i}from"./Button-CA6AkUR_.js";import a from"./Default.stories-D-lMF-zX.js";import{C as c}from"./Content-CRiMoq0F.js";import{S as d}from"./Section-smxk9QAc.js";import{T as l}from"./Text-Bw_cIJde.js";import{A as u}from"./ActionGroup-2A27ggL_.js";import{T as x}from"./TextField-DKH0rH4c.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-BWEcB93I.js";import{A as h}from"./ActionBatch-CnX-7Tzc.js";import{L as z}from"./Label-BaJSnICs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./utils-VWmQzJjV.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./Text-B3jOd0w4.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./ModalTrigger-Bc6_o2UZ.js";import"./OverlayTrigger-DGu3y4_r.js";import"./DialogTriggerView-59a06wTI.js";import"./lib-hIiwLT8c.js";import"./ResetButton-C4Ep7Det.js";import"./FieldError-fCgHoEMk.js";import"./FieldError-B_BExaNJ.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./ActionGroupView-oC77FUWd.js";import"./useRef-D0S1EFiC.js";import"./browser-D6O_MAcc.js";import"./ColumnLayout-Bropz71p.js";import"./AccentBox-B3BXEjFh.js";import"./Radio-DIacLaDj.js";import"./useFieldComponent-BOMK2S5G.js";import"./useMakeFocusable-BxZgzpIb.js";import"./RadioGroup-lftL3P9x.js";import"./Form-XtAuYD0I.js";import"./useFormValidation-przZuKLk.js";import"./useFormReset-D1AT4nVs.js";import"./RadioButton-CjefbRZF.js";import"./DatePicker-BmsmqpKo.js";import"./DateInput-VYI2TtOV.js";import"./Group-BY2zOSJX.js";import"./Input-DI2XwVnV.js";import"./useSpinButton-QzrP8-0Q.js";import"./useFilter-DwZT0Q-z.js";import"./Popover-CBq8Jp6I.js";import"./RangeCalendar-Cs1XnEZ3.js";import"./Heading-Nh2qIPHf.js";import"./useUpdateEffect-DEvLaXnE.js";import"./FieldDescription-BJFWlccI.js";import"./index-DHdVKtCo.js";import"./EmulatedBoldText-DLcv393z.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./TextField-DfYJlBbG.js";import"./useTextField-aMHav-G9.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./ContextMenuSection-y3Qnt4sa.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isDefaultOpen>
        <Heading>{dummyText.short}</Heading>
        <Content>
          <Section>
            {size === "s" && <Text>{dummyText.long}</Text>}
            {size === "m" && <TextField>
                <Label>{dummyText.short}</Label>
              </TextField>}

            <Button onPress={() => setSize(size === "s" ? "m" : "s")}>
              Change size
            </Button>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeModal>
            <Button color="accent">Create customer</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>;
  }
}`,...r.parameters?.docs?.source}}};const at=["SizeChange"];export{r as SizeChange,at as __namedExportsOrder,nt as default};
