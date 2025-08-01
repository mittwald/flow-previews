import{j as r}from"./iframe-Ct0YhZ2w.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-Nibz28Ko.js";import{L as m}from"./Link-D8ITZeMV.js";import{H as s}from"./HeaderNavigation-fME-Z6la.js";import{B as o}from"./Button-DzWxEQls.js";import{T as p}from"./Text-c1auIdYf.js";import{I as C}from"./Image-aTyam2MX.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B37wN-Up.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DNoouHtr.js";import"./ContextMenuSection-DVHz3eTW.js";import{a as D,M as G}from"./Modal-DDwX7stn.js";import{H as E}from"./Heading-CumZ9Fix.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./context-C170bgop.js";import"./utils-ZYq7i5E4.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CCIxnJPX.js";import"./useFocus-BOvvpzaY.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BsXh4HZo.js";import"./Button-BQqMUkU2.js";import"./ProgressBar-BerxnO-h.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./useLabel-CFRZWafb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";import"./Text-1hz8XXbQ.js";import"./AlertIcon-VkvbYSMi.js";import"./Action-BGsoQCTh.js";import"./context-DgvMtz2m.js";import"./useStatic-QRqKr9NZ.js";import"./getActionGroupSlot-Ll0O5gVd.js";import"./Popover-BtKD-QEY.js";import"./DialogTriggerView-BGtRBSVG.js";import"./Dialog-CAIBTckX.js";import"./RSPContexts-CSqJcAwc.js";import"./OverlayArrow-Co-RMxdG.js";import"./useControlledState-BKGcljyy.js";import"./Collection-CsGYI6W2.js";import"./CollectionBuilder-BcuD1eRh.js";import"./Separator-B99z4htK.js";import"./Group-Cb0btd0m.js";import"./SearchField-BzrmJ9Dk.js";import"./FieldError-GfqWmPDy.js";import"./Form-D5t9IVHW.js";import"./useTextField-CmZz0IWu.js";import"./useFormReset-B8uzDw4w.js";import"./TextField-BZzrHcv0.js";import"./useEvent-BiRRHzhl.js";import"./SelectionManager-CdGGEfbQ.js";import"./useCollator-BztlYHwj.js";import"./FocusScope-CiY9IOxE.js";import"./VisuallyHidden-C2BGRztG.js";import"./Switch-Bz8mwOIc.js";import"./Label-DV38Rr2k.js";import"./useToggleState-DMLACUep.js";import"./Overlay-BL8jCBLU.js";import"./Header-TITjJ4eS.js";import"./ButtonView-D1DA0Eqa.js";import"./Heading-s26HsVEN.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
