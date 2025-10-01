import{j as r}from"./iframe-BdvCKsbF.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-P52nLd_s.js";import{L as m}from"./Link-CYuL7qHB.js";import{H as s}from"./HeaderNavigation-SkplJNJ5.js";import{B as o}from"./Button-CEcdxUV1.js";import{T as p}from"./Text-JqEaJ00k.js";import{I as B}from"./Image-7tEJ7RYQ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dr4Aep2B.js";import{C as y,M as c}from"./MenuItem-DL4dgXgJ.js";import{C as A}from"./ContextMenuTrigger-KcV7tGV0.js";import"./ContextMenuSection-BnE57rKt.js";import{a as D,M as E}from"./Modal-D5R-urrb.js";import{H as G}from"./Heading-DMBcew2u.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./index-nNeao2-W.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./utils-BbupUKpI.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./dynamic-a4vM_yKz.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-1fV_VPE3.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./Text-C3C-Y4LW.js";import"./AlertIcon-8N6h8oxE.js";import"./Action-CY3HJwZy.js";import"./context-CCm7d4ti.js";import"./useStatic-PYikJUKS.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./Popover-DIMVCCn2.js";import"./useOverlayController-Ot3Ai6Bn.js";import"./OverlayContextProvider-DLByYP72.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./ClearPropsContextView-Cu9Qi4Nq.js";import"./Switch-8-U5PjWP.js";import"./useMakeFocusable-BRRRy5hj.js";import"./useToggleState-Dwl8BZhq.js";import"./useFormReset-DGsTBoXq.js";import"./OverlayTrigger-COQc48B1.js";import"./ControlledNotification-FezNhtwt.js";import"./DialogTriggerView-Cy6V6iVe.js";import"./Overlay-DzaM7yLo.js";import"./ButtonView-CSUXdX6s.js";import"./Heading-av54CM7K.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
