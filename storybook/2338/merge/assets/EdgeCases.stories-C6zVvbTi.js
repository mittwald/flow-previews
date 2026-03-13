import{r as s,j as o}from"./iframe-BFddea_x.js";import{M as n}from"./Modal-Bu11h-S7.js";import{B as i}from"./Button-DmFob37h.js";import a from"./Default.stories-DcvNd_Yy.js";import{C as c}from"./Content-CWzMlKrq.js";import{S as d}from"./Section-DorsmKJX.js";import{T as l}from"./Text-B70YymId.js";import{A as u}from"./ActionGroup-B4CMqS7f.js";import{T as x}from"./TextField-C4oclEWY.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-C7vi7fKP.js";import{A as h}from"./ActionBatch-BLAWmMpV.js";import{L as z}from"./Label-Cyz25dCh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./utils-D-aZUMcZ.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./context-CaZH5px0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./ModalTrigger-zcA7-V1x.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./DialogTriggerView-D9jblR2E.js";import"./lib-BNqMb5s3.js";import"./FormRootError-DAozFL3q.js";import"./ActionGroupView-BXRFxTws.js";import"./useRef-Cur5NpMF.js";import"./browser-PH3BUHM2.js";import"./FieldError-BfmusLP_.js";import"./FieldError-Dj7b6ixT.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./ColumnLayout-D3SlZPhk.js";import"./AccentBox-BLicXDTG.js";import"./Radio--yJXiEga.js";import"./useFieldComponent-DrOhnKye.js";import"./useMakeFocusable-8SIFOJjD.js";import"./RadioGroup-CiDEEYNL.js";import"./Form-Cmx7zRsN.js";import"./useFormValidation-CYvJLeFF.js";import"./useFormReset-C1U9nA2s.js";import"./RadioButton-C0UWtQsl.js";import"./DatePicker-W3Pl58ba.js";import"./DateInput-z-gPZ-jZ.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useSpinButton-1pG5mt9H.js";import"./useFilter-BuHxzijw.js";import"./Popover-BbCf_utC.js";import"./RangeCalendar-DaGxT35E.js";import"./Heading-CkECWlTX.js";import"./useUpdateEffect-BOQYmVop.js";import"./FieldDescription-DqsHbSnc.js";import"./index-bgvWdk0l.js";import"./EmulatedBoldText-C15EfUg3.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./TextField-Cha2rHT2.js";import"./useTextField-C79BrPY1.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./ContextMenuSection-C_9nT1gz.js";const at={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ct=["SizeChange"];export{r as SizeChange,ct as __namedExportsOrder,at as default};
