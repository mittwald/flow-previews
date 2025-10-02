import{j as r}from"./iframe-hiH37hms.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Cse0Xf0Q.js";import{L as m}from"./Link-CelcyI2A.js";import{H as s}from"./HeaderNavigation-Dk7u6HXz.js";import{B as o}from"./Button-BrzTi3gr.js";import{T as p}from"./Text-CsOmTVyE.js";import{I as B}from"./Image-Dse-Dync.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B7NZrSlp.js";import{C as y,M as c}from"./MenuItem-GB3itHKp.js";import{C as A}from"./ContextMenuTrigger-m7GbKr55.js";import"./ContextMenuSection-Co8KQTmA.js";import{a as D,M as E}from"./Modal-DQjZrGJD.js";import{H as G}from"./Heading-OoTPR-HK.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./index-BJu77HCL.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./utils-JHWv327y.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./dynamic-BmCJXizF.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BuBe5AKm.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./AlertIcon-I8RXIybV.js";import"./Action-BsGu1LRs.js";import"./context-riC63IcS.js";import"./useStatic-8hqO5zoY.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./Popover-BDsWujJA.js";import"./useOverlayController-DvRmJzEO.js";import"./OverlayContextProvider-BhW5Vn6y.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./ClearPropsContextView-BL5bUN3p.js";import"./Switch-B0CGBlso.js";import"./useFieldComponent-CPFfLOL8.js";import"./FormField.module-CapR5K3V.js";import"./FieldError-BChewV0h.js";import"./react-children-utilities-CYBZOoJV.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DyCeZkV5.js";import"./useFormReset-BDeOlo8n.js";import"./OverlayTrigger-BUljVaN1.js";import"./ControlledNotification-jUukWxP4.js";import"./DialogTriggerView-CgVYRPCF.js";import"./Overlay-BURIexVg.js";import"./ButtonView-CzVg0FNt.js";import"./Heading-CRf9y3R9.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=e.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const io=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,io as __namedExportsOrder,to as default};
