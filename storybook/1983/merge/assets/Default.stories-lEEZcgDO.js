import{j as r}from"./iframe-Iz-jrQ83.js";import{y as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BfmxR99x.js";import{L as m}from"./Link-DEyuIf0T.js";import{H as s}from"./HeaderNavigation-Zd6Y8F14.js";import{B as o}from"./Button-vOPcRaQ8.js";import{T as p}from"./Text-Dk41Q_nF.js";import{I as C}from"./Image-DSHkSA4A.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DU40a1jY.js";import{b as y,C as A,M as c}from"./ContextMenuSection-BPS38MvH.js";import{a as D,M as E}from"./Modal-DnEQMbZc.js";import{H as G}from"./Heading-C6NSSN9v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./context-BdTRL7oB.js";import"./utils-Dydu0pBS.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CAUR_6bc.js";import"./useFocus-p13hF2Sk.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocusable-D1JGAIsJ.js";import"./dynamic-Bo4plrg9.js";import"./LoadingSpinner-BKi8wNla.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-P11Hto4i.js";import"./ProgressBar-xCJgXxXU.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./useLabel-BXusGe9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./Text-DcONEmQQ.js";import"./AlertIcon-DvkpDTAC.js";import"./Action-Br1QCYBe.js";import"./context-DNlUm82J.js";import"./useStatic-D6VuC2u7.js";import"./getActionGroupSlot-DopO3qdD.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./RSPContexts-BeWSySSO.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./useControlledState-C1EOK33K.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./CollectionBuilder-CH12bxgH.js";import"./Separator-CTGwUbop.js";import"./Group-Dc1Igsud.js";import"./SearchField-CsOWpSNr.js";import"./FieldError-7b0XYa9_.js";import"./Form-B2pzq79_.js";import"./useTextField-c8k6OVAk.js";import"./useFormReset-Cl_PLqIc.js";import"./TextField-DzXCHFtW.js";import"./useEvent-CCByfuyl.js";import"./SelectionManager-DJ3uM6IO.js";import"./Switch-qmJ61_Ws.js";import"./Label-BLFOHaT0.js";import"./useToggleState-DXGcm8AT.js";import"./Overlay-pZ4-DNst.js";import"./ButtonView-D4RHJhaR.js";import"./Heading-LjQ3pJ7P.js";const Ur={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Vr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Vr as __namedExportsOrder,Ur as default};
